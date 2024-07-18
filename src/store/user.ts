import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUserState {
    name: string;
    email: string;
    address: string;
    addressDetail: string;
    setName: (data: string) => void;
    setEmail: (data: string) => void;
    setAddress: (data: string) => void;
    setAddressDetail: (data: string) => void;
}

export const useAuthStore = create(
    persist<IUserState>(
        (set) => ({
            name: '',
            email: '',
            address: '',
            addressDetail: '',
            setName: (data: string) =>
                set((state) => ({ ...state, name: data })),
            setEmail: (data: string) =>
                set((state) => ({ ...state, email: data })),
            setAddress: (data: string) =>
                set((state) => ({ ...state, address: data })),
            setAddressDetail: (data: string) =>
                set((state) => ({ ...state, addressDetail: data })),
        }),
        {
            name: 'userAuthStorage',
        },
    ),
);
