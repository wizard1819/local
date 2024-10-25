export function fileAttach(data: any) {
    let files = data.target.files;
    var filesList: any[] = [];
    Object.keys(files).forEach((res: any , i : any) => {
        
        let reader = new FileReader();
        let file = files[res];
        let fileType = file.type.split('/');
        reader.onload = (e: any) => {
            filesList.push({ id: 0, file: res, baseData: e.target?.result, name: file.name, size: file.size / 1000, type: fileType[1] });
        }
        reader.readAsDataURL(file);
    });

    if (filesList.length > 1) {
        return filesList;
    } else {
        return filesList[0];
    }
}

export function logCat(data: any) {
    console.log(data);
}


export interface File {
    id: any;
    file: any;
    name: string;
    size: any;
    type: any;
    baseData: any;
}