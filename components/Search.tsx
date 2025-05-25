
"use client"
import { createContext, useContext, useState } from "react"

const SearchContext = createContext({
    searchValue: "",
    setSearchValue: (v: string) => { },
})

export function SearchProvider({ children }: { children: React.ReactNode }) {
    const [searchValue, setSearchValue] = useState("")
    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => useContext(SearchContext)