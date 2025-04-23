interface NewsCardProps {
  data: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: string;
    website: string;
    phone: number;
  };
}
const NewsCard = ({ data }: NewsCardProps) => {
  // console.log(data)
  return (
    <>
      <div className="w-full max-w-sm bg-slate-400 border border-gray-200 rounded-lg shadow cursor-pointer hover:-translate-y-1 transition-all duration-200">
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {data.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700">{data.username}</p>
          <p className="mb-3 font-normal text-gray-700">{data.email}</p>
          <p className="mb-3 font-normal text-gray-700">{data.phone}</p>

          <p className="mb-3 font-normal text-gray-700">{data.website}</p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
