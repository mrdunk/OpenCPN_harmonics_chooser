export abstract class UploadBase {
  public static imported_data: Map<string, object> = new Map();
  static version: number = -1;

  public get_version() {
    return UploadBase.version;
  }

  public get_imported_data() {
    return UploadBase.imported_data;
  }
}

export class UploadDefault extends UploadBase {
  public imported_data: Map<string, object>;
  private readonly default_urls = [
    {
      harmonic: "data/TICON4.csv",
      metadata: "data/GESLA4_ALL.csv",
    },
  ];

  constructor() {
    super();
    this.imported_data = UploadBase.imported_data;
    for (const urls of this.default_urls) {
      for (const [data_type, url] of Object.entries(urls)) {
        this.display_default_files(data_type, url);
        this.fetch_file(data_type, url);
      }
    }
  }

  private display_default_files(data_type: string, url: string) {
    const container = $("#form-check");
    const line = container.append("<div>");
    const id = `${data_type}_${this.generateHash(url)}`;
    let label = "Use ";
    if (data_type === "harmonic") {
      label += "Harmonic Constants file: ";
    } else {
      label += "Metdata file: ";
    }
    label += url;

    line.append(
      `<input class="form-check-input" type="checkbox" value="" id="${id}" checked>`,
    );
    line.append(`<label class="form-check-label" for="${id}">${label}</label>`);

    const checkbox = $(`input#${id}`);
    checkbox.change((event) => {
      if ((event.target as HTMLInputElement).checked) {
        this.fetch_file(data_type, url);
      } else {
        this.flush_file(data_type, url);
      }
    });
  }

  private generateHash(input: string) {
    let hash = 0;
    for (const char of input) {
      hash = (hash << 5) - hash + char.charCodeAt(0);
      hash |= 0; // Constrain to 32bit integer
    }
    return hash;
  }

  private async fetch_file(data_type: string, url: string) {
    if (data_type === "harmonic") {
      UploadBase.version += 1;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const text = await response.text();
      const file_type = response.headers.get("Content-Type");
      const key = `${data_type}_${this.generateHash(url)}`;
      this.imported_data.set(key, [url, data_type, file_type, text]);
    } catch (e) {
      console.error(e);
    }
  }

  private flush_file(data_type: string, url: string) {
    if (data_type === "harmonic") {
      UploadBase.version += 1;
    }

    const key = `${data_type}_${this.generateHash(url)}`;
    this.imported_data.delete(key);
  }
}

export class UploadFile extends UploadBase {
  protected data_type: string;
  public imported_data: Map<string, object>;
  private upload_button: JQuery<HTMLElement>;
  private enable_links;

  constructor(data_type: string, enable_links?: (state: boolean) => void) {
    super();
    this.data_type = data_type;
    this.imported_data = UploadBase.imported_data;
    this.upload_button = $(`input#select-${this.data_type}-file:file`);
    this.upload_button.change((event) => {
      this.import_local_file(event);
    });
    this.enable_links = enable_links;
  }

  private import_local_file = (event: JQuery.ChangeEvent) => {
    const file_input = event.target;
    // Validate file existence and type
    if (!file_input) {
      return false;
    }
    const files = (file_input as HTMLInputElement).files;
    if (!files) {
      return false;
    }
    const file = files[0];
    if (!file) {
      console.log("No file selected. Please choose a file.", "error");
      return false;
    }
    if (!file.type.startsWith("text")) {
      console.log("Unsupported file type. Please select a text file.", "error");
      return false;
    }

    // Read the file
    const reader = new FileReader();
    reader.onload = (event) => {
      this.read_file(file, reader);
    };
    reader.onerror = () => {
      console.log("Error reading the file. Please try again.", "error");
    };
    reader.readAsText(file);
    return true;
  };

  private read_file = (file: File, reader: FileReader) => {
    const content = reader.result;
    if (!content) {
      // Empty file?
      console.warn(`Problem reading local file: ${file.name}`);
      return;
    }
    if (typeof content != "string") {
      console.warn(`Problem reading local file: ${file.name}`);
      return;
    }
    const filename_hash = this.generateHash(file.name);
    const content_hash = this.generateHash(content);
    const key = `${filename_hash}_${content_hash}`;

    // Store contents.
    if (UploadFile.imported_data.has(key)) {
      console.log(`File already imported: ${file.name}`);
      return;
    }
    UploadFile.imported_data.set(key, [
      file.name,
      this.data_type,
      file.type,
      content,
    ]);
    if (this.enable_links != undefined) {
      this.enable_links(true);
    }

    // Crate a row on the table displaying the filename the data came from.
    const file_id = `import_file_${this.data_type}_${key}`;
    const row = $(
      `<div id="${file_id}" class="imported-${this.data_type}-file row border"></div>`,
    );
    const label = $(`<div class="col-6">${file.name}</div>`);
    const del_button = $(
      `<div class="col-4"><button type="button" id="del_import_${this.data_type}_${key}" class="btn btn-primary btn-sm">Remove file</button></div>`,
    );
    row.append(del_button);
    row.append(label);
    $(`#imported-${this.data_type}-files`).append(row);

    UploadBase.version += 1;

    del_button.on("click", this.remove_entry.bind(this));
  };

  private remove_entry(event: Event) {
    const element: EventTarget | null = event.target;
    if (!element) {
      return;
    }
    const key = (<HTMLElement>element).id.replace(
      `del_import_${this.data_type}_`,
      "",
    );
    const file_id = `import_file_${this.data_type}_${key}`;

    // Remove file content from collection.
    UploadFile.imported_data.delete(key);
    if (UploadFile.imported_data.size <= 0 && this.enable_links != null) {
      this.enable_links(false);
    }

    // Remove HTML row displaying filename to user.
    $(`div#${this.escapeSelector(file_id)}`).remove();

    UploadBase.version += 1;
  }

  private generateHash(input: string) {
    let hash = 0;
    for (const char of input) {
      hash = (hash << 5) - hash + char.charCodeAt(0);
      hash |= 0; // Constrain to 32bit integer
    }
    return hash;
  }

  private escapeSelector(selector: string): string {
    return selector.replace(/(:|\.|\[|\])/g, "\\$1");
  }
}
