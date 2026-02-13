export class DataUpload {
  private upload_button: JQuery<HTMLElement>;
  private enable_links_config;
  imported_harmonics: Map<string, object>;
  version: number = 0;

  constructor(enable_links_config: (state: boolean) => void) {
    this.imported_harmonics = new Map();
    this.upload_button = $("#select-input-file:file");
    this.upload_button.change(this.import_data);
    this.enable_links_config = enable_links_config;
  }

  private import_data = (event: Event) => {
    const file_input = event.target;
    // Validate file existence and type
    if (!file_input) {
      return false;
    }
    const files = (file_input as HTMLInputElement).files;
    if(!files) {
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
    if(!content) {
      // Empty file?
      console.warn(`Problem reading local file: ${file.name}`);
      return;
    }
    if(typeof(content) != "string") {
      console.warn(`Problem reading local file: ${file.name}`);
      return;
    }
    const hash = this.generateHash(content);
    const key = `${file.name}_${hash}`;

    // Store contents.
    if (this.imported_harmonics.has(key)) {
      console.log(`File already imported: ${file.name}`);
      return;
    }
    this.imported_harmonics.set(key, [file.type, content]);
    this.enable_links_config(true);

    // Clear any previous value in file selector.
    $("input.select-input-file:file").val("");

    // Crate a row on the table displaying the filename the data came from.
    const file_id = `import_file_${key}`;
    const row = $(
      `<div id="${file_id}" class="imported-harmonic-file row border"></div>`,
    );
    const label = $(`<div class="col-6">${file.name}</div>`);
    const del_button = $(
      `<div class="col-2"><button type="button" id="del_import_${key}" class="btn btn-primary btn-sm">Remove file</button></div>`,
    );
    row.append(del_button);
    row.append(label);
    $("#imported-harmonic-files").append(row);

    this.version += 1;

    del_button.on("click", (event) => {
      // Remove file content from collection.
      this.imported_harmonics.delete(key);
      if (this.imported_harmonics.size <= 0) {
        this.enable_links_config(false);
      }

      // Remove HTML row displaying filename to user.
      $(`div#${this.escapeSelector(file_id)}`).remove();
      console.log(this.imported_harmonics);

      this.version += 1;
    });
  };

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
