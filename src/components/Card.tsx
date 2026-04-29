const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      {children}
    </div>
  );
};

export default Card;