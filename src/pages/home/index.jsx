export default function Home() {
    const data = [
        {
            id: 1,
            title: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
            price: "$12.56",
            image: "./../../../public/images/image-1.png"
        },
        {
            id: 2,
            title: "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting",
            price: "$12.56",
            image: "./../../../public/images/image-2.png"
        },
        {
            id: 3,
            title: "SEEDRA Spinach Seeds for Indoor and Outdoor Planting",
            price: "$12.56",
            image: "./../../../public/images/image-3.png"
        },
        {
            id: 1,
            title: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
            price: "$12.56",
            image: "./../../../public/images/image-1.png"
        },
        {
            id: 2,
            title: "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting",
            price: "$12.56",
            image: "./../../../public/images/image-2.png"
        },
        {
            id: 3,
            title: "SEEDRA Spinach Seeds for Indoor and Outdoor Planting",
            price: "$12.56",
            image: "./../../../public/images/image-3.png"
        },
        ]

    return (
        <div className="max-w-[1110px]">
            <div className="bg-[#EAF1EB] mb-[16px] mt-[32px] min-h-[500px] flex flex-wrap lg:justify-center overflow-hidden pl-[50px] xl:justify-between rounded-[24px]">
                <div className="flex flex-col mt-[48px] mx-auto gap-[21px]">
                    <h1 className="font-bold text-[48px] text-[#1F2533] leading-[54px]">SEEDRA Basil Seeds for <br /> Indoor and Outdoor Planting</h1>
                    <p className="font-normal text-[16px]">Be sure of our quality - the freshest batches of this season. Non-GMO, <br /> Heirloom - our seeds were tested and have the best germination ratings. <br /> Your easy growing experience is our guarantee</p>
                    <div className="flex items-center gap-[21px]">
                        <img src="./../../../public/svg/Vector.svg" alt="logo" />
                        <h1 className="text-[#1F2533] text-[42px] font-bold">$12.56</h1>
                        <h2 className="text-[#70737C] text-[22px] font-bold">$15.56</h2>
                    </div>
                    <div className="flex gap-[12px]">
                        <button className="btn w-[153px] h-[51px] bg-[#359740] text-[#FFFFFF]">Add to card</button>
                        <button className="btn w-[131px] h-[51px] bg-[#FFFFFF] border-none text-[#359740]">Discover</button>
                    </div>
                </div>
                <img className="w-[400px] mt-[50px] mx-auto h-[450px]" src="./../../../public/png/header-image.png" alt="" />
            </div>
            <div className="flex items-center rounded-[12px] overflow-hidden bg-[#ffe72e0e] max-w-[1110px] justify-between">
                <img src="./../../../public/png/left-bar-image.png" alt="" />
                <div className="text-center">
                    <h1 className="font-bold text-[24px]">We sell seeds</h1>
                    <p className="text-[16px] font-semibold text-[#70737C]">that always sprout and gardening supplies which never break</p>
                </div>
                <img src="./../../../public/png/right-bar-image.png" alt="" />
            </div>
            <div className="max-w-[1110px] flex justify-between items-center mt-[48px]">
                <h1 className="font-bold text-[36px] text-[#1F2533]">Our products.</h1>
                <button className="btn text-[#359740] bg-[#ffffff] text-[16px] font-semibold">View all (12)</button>
            </div>
            <div className="flex justify-between mt-[40px]">
                <button className="btn bg-[#ffffff] h-[72px] w-[110px]"><img src="./../../../public/svg/all.svg" alt="all" />ALL</button>
                <button className="btn bg-[#ffffff] h-[72px] w-[144px]"><img src="./../../../public/svg/bundles.svg" alt="" /> BUNDLES</button>
                <button className="btn bg-[#ffffff] h-[72px] w-[128px]"><img src="./../../../public/svg/herbs.svg" alt="all" /> HERBS</button>
                <button className="btn bg-[#ffffff] h-[72px] w-[187px]"><img src="./../../../public/svg/vegetables.svg" alt="all" /> VEGETABLES</button>
                <button className="btn bg-[#ffffff] h-[72px] w-[148px]"><img src="./../../../public/svg/fruits.svg" alt="all" /> FRUITS</button>
                <button className="btn bg-[#ffffff] h-[72px] w-[157px]"><img src="./../../../public/svg/supplies.svg" alt="all" /> SUPPLIES</button>
                <button className="btn bg-[#ffffff] h-[72px] w-[163px]"><img src="./../../../public/svg/flower.svg" alt="all" /> FLOWERS</button>
            </div>
            {/* wrapper */}
            <div className="mt-[32px] flex flex-wrap justify-center gap-[30px]">
                {data.map((item) => (
                    <div key={item.id} className="relative flex flex-col justify-center items-center w-[350px] border h-[512px] bg-[#ffffff] rounded-[24px]">
                        <img className="w-[300px] h-[300px] rounded-t-[24px]" src={item.image} alt="" />
                        <div className="p-[16px]">
                            <h1 className="font-bold text-[20px]">{item.title}</h1>
                            <div className="flex items-center justify-between mt-[16px]">
                                <h1 className="font-bold text-[20px]">{item.price}</h1>
                                <button className="btn border h-[51px] bg-[#FFFFFF] text-[#359740]"><img src="./../../../public/svg/icon_cart_simple.svg" alt="" /></button>
                            </div>
                        </div>
                        <button className="btn absolute top-[12px] w-[40px] p-0 h-[40px] right-[12px] border bg-[#ffffff] rounded-full"><img className="w-[24px] h-[24px]" src="./../../../public/svg/like-btn.svg" alt="liks logo" /></button>
                    </div>
                ))}
            </div>
            <div className="max-w-[1110px] flex justify-between items-center mt-[90px]">
                <h1 className="font-bold text-[36px] text-[#1F2533]">Our blog.</h1>
                <button className="btn text-[#359740] bg-[#ffffff] text-[16px] font-semibold">Go to our blog</button>
            </div>
            <div className="w-full">

            </div>
        </div>
    )
}