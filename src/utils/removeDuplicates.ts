function removeDuplicates<T>(array: T[], id: keyof T): T[] {
  return array.filter((item, index, self) => index === self.findIndex((selfItem) => selfItem[id] === item[id]));
}

export default removeDuplicates;
