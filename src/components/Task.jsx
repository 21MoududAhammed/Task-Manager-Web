import { FaStar } from "react-icons/fa";
export default function Task({ task }) {
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>{task.isFavorite ? <FaStar color="yellow" /> : <FaStar />}</td>
      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map((item, index) => {
            return (
              <li key={item}>
                <span
                  className={`${
                    index % 2 === 0 ? "bg-[#00D991A1]" : " bg-[#1C92FFB0]"
                  } inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm capitalize text-[#F4F5F6]`}
                >
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button className="text-red-500">Delete</button>
          <button className="text-blue-500">Edit</button>
        </div>
      </td>
    </tr>
  );
}
