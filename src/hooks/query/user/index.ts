import { getUserQnaList } from '@/apis/qna';
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

export function useGetUserQnaList() {
    const {
        data: myQnaList,
        isLoading: isLoadingMyQnaList,
        isError: isErrorUsegMyQnaList,
    } = useQuery({
        queryKey: [`myQnaList`],
        queryFn: () => getUserQnaList(),
    });
    return {
        myQnaList,
        isLoadingMyQnaList,
        isErrorUsegMyQnaList,
    };
}
