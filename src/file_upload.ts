export class DataUpload {
  private target: string;
  private upload_button: JQuery<HTMLElement>;
  private enable_links;
  imported_data: Map<string, object>;
  version: number = 0;

  constructor(target: string, enable_links?: (state: boolean) => void) {
    this.target = target;
    this.imported_data = new Map();
    this.upload_button = $(`input#select-${this.target}-file:file`);
    this.upload_button.change(this.import_data);
    this.enable_links = enable_links;
  }

  private import_data = (event: Event) => {
    const file_input = event.target as HTMLInputElement;
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
    if (this.imported_data.has(key)) {
      console.log(`File already imported: ${file.name}`);
      return;
    }
    this.imported_data.set(key, [file.type, content, file.name]);
    if (this.enable_links != undefined) {
      this.enable_links(true);
    }

    // Crate a row on the table displaying the filename the data came from.
    const file_id = `import_file_${this.target}_${key}`;
    const row = $(
      `<div id="${file_id}" class="imported-${this.target}-file row border"></div>`,
    );
    const label = $(`<div class="col-6">${file.name}</div>`);
    const del_button = $(
      `<div class="col-4"><button type="button" id="del_import_${this.target}_${key}" class="btn btn-primary btn-sm">Remove file</button></div>`,
    );
    row.append(del_button);
    row.append(label);
    $(`#imported-${this.target}-files`).append(row);

    this.version += 1;

    del_button.on("click", this.remove_entry.bind(this));
  };

  private remove_entry(event: Event) {
    const element: EventTarget | null = event.target;
    if(!element){
      return;
    }
    const key = (<HTMLElement>element).id.replace(`del_import_${this.target}_`, "");
    const file_id = `import_file_${this.target}_${key}`;

    // Remove file content from collection.
    this.imported_data.delete(key);
    if (this.imported_data.size <= 0 && this.enable_links != null) {
      this.enable_links(false);
    }

    // Remove HTML row displaying filename to user.
    $(`div#${this.escapeSelector(file_id)}`).remove();

    this.version += 1;
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
