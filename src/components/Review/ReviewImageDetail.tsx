import { IoClose } from 'react-icons/io5';
import { useReviewStore } from '@/store/review';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

export default function ReviewImageDetail() {
    const { isModalOpen, imagePath, closeModal } = useReviewStore();
    return (
        <Dialog open={isModalOpen}>
            <DialogContent className="pt-10 sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        <p className="sr-only">사진 상세</p>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={closeModal}
                            className="absolute right-2.5 top-2.5 z-20 bg-white"
                        >
                            <IoClose className="h-8 w-8" />
                        </Button>
                    </DialogTitle>
                </DialogHeader>
                <img src={imagePath} alt="product review" />
            </DialogContent>
        </Dialog>
    );
}
