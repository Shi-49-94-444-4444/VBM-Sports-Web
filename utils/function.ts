export function validateURLAvatar(url: string | undefined | null) {
    if (!url) {
        return "/images/avatar.jpg";
    }

    try {
        new URL(url);
        return url;
    } catch (err) {
        return "/images/avatar.jpg";
    }
}

export function validateURLProduct(url: string | undefined | null) {
    if (!url) {
        return "/images/item_1.jpg";
    }

    try {
        new URL(url);
        return url;
    } catch (err) {
        return "/images/item_1.jpg";
    }
}

export function validateTime(value: string | undefined | null) {
    if (!value) {
        return "00:00";
    }

    return value;
}

export function validateDate(value: string | undefined | null) {
    if (!value) {
        const date = new Date();
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    return value;
}

export function validateName(value: string | undefined | null) {
    if (!value) {
        return "Shi";
    }

    return value;
}

export function validateTitle(value: string | undefined | null) {
    if (!value) {
        return "Sân bóng minh họa";
    }

    return value;
}

export function validateDescription(value: string | undefined | null) {
    if (!value) {
        return "Văn bản chỉ mang tính chất minh họa";
    }

    return value;
}

export function validateNumber(value: number | undefined | null) {
    if (!value) {
        return 0;
    }

    return value;
}

export function validateAddress(value: string | undefined | null) {
    if (!value) {
        return "Hồ Chi Minh";
    }

    return value;
}

