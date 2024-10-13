import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
export function getMonthName(monthNumber: number, translatedMonths: string[] = months) {
  
  return translatedMonths[monthNumber];
}

export function getInitials(name: string) {
  // Split the name string by spaces
  const nameParts = name.trim().split(/\s+/);
  
  // Map through each part and get the first character
  const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join('');
  
  return initials;
}

export function getTranslatedKey(key: string, selectedLanguage: string, record?: any) {
  // Construct the key for the selected language
  const translatedKey = `${key}_${selectedLanguage}`;
  
  // Return the translated key if it exists, otherwise fallback to the default key
  return record && record[translatedKey] || record[key] ? record[translatedKey] || record[key] : '';
}