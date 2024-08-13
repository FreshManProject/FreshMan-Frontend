export default function InquiryList() {
    return (
        <div className="mt-5 flex flex-col">
            {/* {inquiryList.map((inquiry: InquiryType) => (
                <div
                    key={inquiry.id}
                    className={`mb-10 ${selectedInquiryId === inquiry.id ? 'bg-gray-100' : ''}`}
                >
                    <div className="flex flex-row my-1 text-gray-400">
                        <p className="mr-3">{inquiry.date}</p>
                        <p>{inquiry.author}</p>
                    </div>
                    <div className="flex flex-row justify-between my-1">
                        <p>{inquiry.title}</p>
                        {inquiry.answer.length > 1 ? (
                            <button
                                type="button"
                                className="text-body2_b text-primary"
                                onClick={() =>
                                    handleClickInquiryDetail(inquiry.id)
                                }
                            >
                                답변완료
                            </button>
                        ) : (
                            <p className="text-gray-400 text-body2_b">
                                답변대기
                            </p>
                        )}
                    </div>
                    <div className="flex flex-row">
                        <img
                            src={`${inquiry.image}`}
                            className="mx-2 h-[90px] w-[90px]"
                            alt="문의 이미지"
                        />
                        <p>{inquiry.description}</p>
                    </div>
                    {selectedInquiryId === inquiry.id && (
                        <div>
                            <h4 className="font-bold">답변</h4>
                            <p>{inquiry.answer}</p>
                        </div>
                    )}
                </div>
            ))} */}
        </div>
    );
}
