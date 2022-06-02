/**
 * Asynchronously select file(s).
 *
 * @param contentType The content type of files you wish to select. For instance, use "image/*" to select all types of images.
 * @param multiple Indicates if the user can select multiple files.
 * @returns A promise of a file or array of files in case the multiple parameter is true.
 */
function selectFiles(contentType: string, multiple: false): Promise<File>;
function selectFiles(contentType: string, multiple: true): Promise<File[]>;

function selectFiles(contentType: string, multiple: boolean): Promise<File | File[]> {
  return new Promise((resolve) => {
    let input = document.createElement('input');
    input.type = 'file';
    input.multiple = multiple;
    input.accept = contentType;

    input.onchange = (_) => {
      let files = Array.from(input.files || []);
      if (multiple) resolve(files);
      else resolve(files[0]);
    };

    input.click();
  });
}

export default selectFiles;
