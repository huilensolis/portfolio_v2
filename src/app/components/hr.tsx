export function Hr({ display = true }: { display?: boolean }) {
  return (
    <hr
      className={`w-full my-10 ${
        display ? "border-gray-700" : "border-transparent"
      } border-b-[1px] ${display ? "border-gray-400" : "border-transparent"}`}
    />
  );
}
