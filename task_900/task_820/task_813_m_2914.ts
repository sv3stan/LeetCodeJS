/**
You are given a 0-indexed binary string s having an even length. A string is beautiful if it's possible to partition it into one or more substrings such that: Each substring has an even length. Each substring contains only 1's or only 0's. You can change any character in s to 0 or 1. Return the minimum number of changes required to make the string s beautiful.
Вам дана двоичная строка s с нулевым индексом и четной длины. Строка красива, если ее можно разделить на одну или несколько подстрок так, что: Каждая подстрока имеет четную длину. Каждая подстрока содержит только 1 или только 0. Вы можете изменить любой символ в s на 0 или 1. Возвращайте минимальное количество изменений, необходимое для того, чтобы строка стала красивой.
 */

function minChanges(s: string): number {
    let shift = 0;

    for (let i = 0; i < s.length; i++, i++) {
        if (s[i] != s[i + 1]) shift++;
    }

    return shift;
}
