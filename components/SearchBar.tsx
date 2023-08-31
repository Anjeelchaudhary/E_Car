"use client";

import { manufacturers } from "@/constants";
import { SearchManufacturer } from "./";
import { useState } from "react";
import Image from "next/image";
import { addListener } from "process";
import { useRouter } from "next/navigation";

const SearchBar = () => {

    const SearchButton = ({ otherClass }: { otherClass?: string }) => (
        <button type="submit" className={`-ml-3 z-10 ${otherClass}`}>
            <Image src="/magnifying-glass.svg"
                alt="maginfying glass"
                width={40}
                height={40}
                className="object-contain" />
        </button>
    )
    const [model, setModel] = useState('');

    const [manufacturer, setManufacturer] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (manufacturer === '' && model === '') {
            return alert('Please enter a manufacturer and model');
        }
        updateSearchParams(
            model.toLocaleLowerCase(),
            manufacturer.toLocaleLowerCase());
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);
        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }
        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathname)
    }

    const router = useRouter();
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item ">
                
                <SearchManufacturer 
                manufacturer={manufacturer} 
                setManufacturer={setManufacturer} />

                <SearchButton otherClass="sm:hidden " />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    alt="car model"
                    width={40}
                    height={40}
                    className="absolute w-[20px] h-[20px] ml-4"
                />
                <input
                    type="text"
                    name="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Tiguan"
                    className="searchbar__input"
                />
                <SearchButton otherClass="sm:hidden" />
            </div>
            <SearchButton otherClass="max-sm:hidden" />
        </form>
    )
}

export default SearchBar
