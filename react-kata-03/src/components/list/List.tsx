import "./list.css";

export type Info = {
    id: number;
    text: string;
    btnText: string;
}

export type ListProps<T> = {
    data: T[];
};

const List = ({data}: ListProps<Info>) => {

    if (!data || data.length === 0) {
        return <p>No items to display</p>;
    }

    return (
        <ul className="">
            <li className="">
                {data && data.map((item: Info) => (
                    <span key={item.id}>
                        <span className="">{item.text}</span>
                        <button className="bg-blue-500 rounded-[4px] px-2 py-2 text-white"
                                data-testid="btn-1">{item.btnText}</button>
                    </span>
                ))}
            </li>
        </ul>
    );
}
export default List;