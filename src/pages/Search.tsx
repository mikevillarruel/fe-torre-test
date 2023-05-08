import { useEffect, useState } from "react";
import { usersApi } from "../api/usersApi";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { User } from "../interfaces/interfaces";
import "./Search.css";
import { UserDetail } from "../components/UserDetail";

export const Search = () => {

    const [searchValue, setSearchValue] = useState('')
    const debouncedValue = useDebouncedValue(searchValue);
    const [user, setUser] = useState<User>();


    const getUserByUsername = async (username: string) => {
        try {
            const response = await usersApi.get<User>(`/${username}`);
            setUser(response.data)
        } catch (error: any) {
            setUser(undefined)
        }
    }

    useEffect(() => {
        if (searchValue !== '') {
            getUserByUsername(debouncedValue);
        } else {
            setUser(undefined);
        }
    }, [debouncedValue])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return (
        <>
            <div className="search-container">
                <input className="search" type="text" placeholder="Search..." onChange={handleChange} />
            </div>
            {
                user && <UserDetail user={user} />
            }
        </>
    )
}
