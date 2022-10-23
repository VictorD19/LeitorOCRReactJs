import swal from "sweetalert";

export const SuccessAlert = (text)=>{
    swal("Sucesso", text, "success");
}

export const ErrorAlert = (text)=>{
    swal("Error", text, "error");
}