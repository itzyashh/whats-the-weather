
const currentHHMM = () => {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes().toString().padStart(2, '0');
}

export const convertToHHMM = (value) => {
    const newDate = new Date(value)
    return newDate.getHours() + ":" + newDate.getMinutes().toString().padStart(2, '0');
}

export default currentHHMM;