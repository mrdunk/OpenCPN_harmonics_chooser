export class DataUpload {
  private upload_button: JQuery<HTMLElement>;
  private enable_links_config;
  imported_harmonics: Map<string, object>;
  version: number = 0;

  constructor(enable_links_config: boolean) {
    this.imported_harmonics = new Map();
    this.upload_button = $("#select-input-file:file");
    this.upload_button.change(this.import_data);
    this.enable_links_config = enable_links_config;
  }

  private import_data = (event) => {
    const file = event.target.files[0];
    // Validate file existence and type
    if (!file) {
      console.log("No file selected. Please choose a file.", "error");
      return;
    }

    if (!file.type.startsWith("text")) {
      console.log("Unsupported file type. Please select a text file.", "error");
      return;
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
  };

  private read_file = (file, reader) => {
    const content = reader.result;
    const hash = this.generateHash(content);
    const key = `${file.name}_${hash}`;

    if (this.imported_harmonics.has(key)) {
      console.log(`File already imported: ${file.name}`);
      return;
    }
    this.imported_harmonics.set(key, [file.type, content]);
    this.enable_links_config(true);

    // Clear any previous value in file selector.
    $("input.select-input-file:file").val("");

    const file_id = `import_file_${key}`;
    const row = $(`<div id="${file_id}" class="imported-harmonic-file"></div>`);
    const label = $(`<div>${file.name}</div>`);
    const del_button = $(
      `<button type="button" id="del_import_${key}">del</button>`,
    );
    row.append(label);
    row.append(del_button);
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

  private escapeSelector(selector) {
    return selector.replace(/(:|\.|\[|\])/g, "\\$1");
  }
}
