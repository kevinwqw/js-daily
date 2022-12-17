function getDashDate() {
    const datetime = new Date();
    const year = datetime.getFullYear();
    const month = datetime.getMonth();
    const day = datetime.getDay();

    return `${year}-${month}-${day}`;
}
