import Star from './Star';

export default function ReviewInProduct() {
    return (
        <div>
            <section className={'flex flex-col items-center gap-5 py-9'}>
                <Star w={'w-10'} h={'h-10'} readonly={false} />
                <p className={'text-body1_b'}>
                    {'4.4'}
                    <span className={'text-gray400'}>{' / 4'}</span>
                </p>
            </section>
        </div>
    );
}
