
export function strToArr(str: string): number[] {
    const tmpStr = str.split(",");
    const ans: number[] = tmpStr.map(x => {
        x.trim();
        return Number(x)
    });
    return ans;
}