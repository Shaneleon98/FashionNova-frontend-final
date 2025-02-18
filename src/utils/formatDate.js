 export const formatDate = (isDate) => {
    const date = new Date(isDate);
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}