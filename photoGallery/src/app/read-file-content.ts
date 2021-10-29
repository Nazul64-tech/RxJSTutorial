export type FileContent = string | ArrayBuffer | null;

export const readFileContent = (file: File): Promise<FileContent> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
