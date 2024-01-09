
const currentHHMM = () => {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes().toString().padStart(2, '0');
}

export default currentHHMM;