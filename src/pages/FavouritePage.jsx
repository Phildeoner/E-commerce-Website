import Table from "../components/Table";
import MainLayout from "../layouts/MainLayout";

function FavouritePage() {
  return (
    <>
      <div className="bg-[#F5F5F5] text-gray-900">
        <MainLayout>
          <Table />
        </MainLayout>
      </div>
    </>
  );
}

export default FavouritePage;
