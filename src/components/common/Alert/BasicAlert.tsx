import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';
import { GrayBorderButton, PrimaryBkButton } from '../Button';

interface Props {
    onClick: () => void;
    buttonComponent: React.ReactNode;
    message?: string;
    headerTitle?: string;
}

export default function BasicAlert({
    buttonComponent,
    message,
    headerTitle,
    onClick,
}: Props) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>{buttonComponent}</AlertDialogTrigger>
            <AlertDialogContent className="mx-auto w-[calc(100%-40px)] rounded-md">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-title3_b">
                        {headerTitle}
                    </AlertDialogTitle>
                    <AlertDialogDescription>{message}</AlertDialogDescription>
                </AlertDialogHeader>
                <div className="mt-3 flex gap-2 [&>button]:h-14 [&>button]:flex-1 [&>button]:text-body2_b">
                    <AlertDialogCancel asChild>
                        <GrayBorderButton>취소</GrayBorderButton>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <PrimaryBkButton handleClick={onClick} type="button">
                            확인
                        </PrimaryBkButton>
                    </AlertDialogAction>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
}
