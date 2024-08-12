import { getUserInfo } from '@/apis/user';
import { useQuery } from '@tanstack/react-query';

export function useGetUserInfo() {
    const {
        data: userInfo,
        isLoading: isLoadingUserInfo,
        isError: isErrorUserInfo,
    } = useQuery({
        queryKey: [`user`],
        queryFn: () => getUserInfo(),
    });
    return {
        userInfo,
        isLoadingUserInfo,
        isErrorUserInfo,
    };
}
