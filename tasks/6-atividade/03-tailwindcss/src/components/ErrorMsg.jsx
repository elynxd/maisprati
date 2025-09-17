export const ErrorMsg = ({ message = "An error occurred" }) => {
  return (
    <div className="m-4 rounded-lg border border-red-300 bg-red-50 p-4 text-center font-medium text-red-600">
      {message}
    </div>
  );
};
