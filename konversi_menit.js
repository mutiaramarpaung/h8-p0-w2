function konversiMenit(menit) {
    let jam = Math.floor(menit/60);
    if (menit%60 < 10)
        return `${jam}:0${menit%60}`;
    return `${jam}:${menit%60}`;
}

