const Stats = () => {
    return (
        <div className="p-16 flex flex-col md:flex-row justify-around items-center  blue-to-purple-linear ">
            <div>
                <p className="font-extrabold text-white text-6xl text-center ">50K+</p>
                <p className="font-medium text-white opacity-80  text-2xl text-center">Active Users</p>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div>
                <p className="font-extrabold text-white text-6xl text-center ">200+</p>
                <p className="font-medium text-white opacity-80  text-2xl text-center">Premium Tools</p>
            </div>
            <div className="divider lg:divider-horizontal "></div>
            <div>
                <p className="font-extrabold text-white text-6xl text-center ">4.9</p>
                <p className="font-medium text-white opacity-80  text-2xl text-center">Rating</p>
            </div>
        </div>
    );
};

export default Stats;