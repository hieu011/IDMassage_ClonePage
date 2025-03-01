import { Button } from "@/components/ui/button";

const buttons = [
  { id: 1, label: "THỜI GIAN LÀM VIỆC" },
  { id: 2, label: "HƯỚNG DẪN ĐẶT MASSAGE" },
  { id: 3, label: "LOẠI DỊCH VỤ" },
  { id: 4, label: "THỜI GIAN DI CHUYỂN" },
  { id: 5, label: "QUYỀN LỢI - LƯU Ý" },
  { id: 6, label: "GIÁ VÉ" },
  { id: 7, label: "KHIẾU NẠI - GÓP Ý" },
  { id: 8, label: "PHƯƠNG THỨC THANH TOÁN" },
  { id: 9, label: "LIÊN HỆ" },
  { id: 10, label: "QUY TRÌNH MASSAGE" },
];

export function ListButtonService() {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {buttons.map((button) => (
        <Button
          key={button.id}
          className="w-58 h-16 text-sm flex items-center justify-center cursor-pointer"
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
}
