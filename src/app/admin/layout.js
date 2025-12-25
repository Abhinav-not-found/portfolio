import AdminContainer from "@/components/general/admin-container";


export default function AdminLayout({ children }) {
  return (
    <div>
      <AdminContainer>
        {children}
      </AdminContainer>
    </div>

  )
}
