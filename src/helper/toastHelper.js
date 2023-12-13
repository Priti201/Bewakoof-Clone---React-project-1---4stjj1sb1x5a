import { toast } from 'react-toastify';

const successToastOptions = {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: 'dark'
};
const errorToatOptions = {
    position: 'bottom-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: 'dark'
}
function ToasterMessage(type, message) {
    switch (type) {
        case 'success':
            toast.success(message, successToastOptions);
            break;
        case 'error':
            toast.error(message, errorToatOptions);
            break;
        default:
            break;
    }
}
export { ToasterMessage };