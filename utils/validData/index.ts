export function validateURLAvatar(url: string | undefined | null) {
    if (!url) {
        return "/images/avatar.jpg"
    }

    try {
        new URL(url)
        return url
    } catch (err) {
        return "/images/avatar.jpg"
    }
}

export function validateURLProduct(url: string | undefined | null) {
    if (!url) {
        return "/images/item_1.jpg"
    }

    try {
        new URL(url)
        return url
    } catch (err) {
        return "/images/item_1.jpg"
    }
}

export function validateDate(value: string | undefined | null) {
    if (!value) {
        const date = new Date()
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    return value;
}

export function validateName(value: string | undefined | null) {
    if (!value || value.trim() === '') {
        return "Shi" 
    }

    return value;
}

export function validateTitle(value: string | undefined | null) {
    if (!value || value.trim() === '') {
        return "Sân minh họa" 
    }

    return value;
}

export function validateDes(value: string | undefined | null) {
    if (!value || value.trim() === '') {
        return "Văn bản chỉ mang tính chất" 
    }

    return value;
}

export function validateAddress(value: string | undefined | null) {
    if (!value || value.trim() === '') {
        return "Hồ Chí Minh" 
    }

    return value;
}


