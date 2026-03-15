import UploadPhoto from "../components/UploadPhoto"
  export default function Home() {
  return (
    <main style={{
      textAlign: "center",
      padding: "60px",
      fontFamily: "Arial",
      background: "linear-gradient(135deg,#ffe0f0,#e0f7ff)",
      minHeight: "100vh"
    }}>
      
      <h1 style={{fontSize:"60px"}}>
        💇‍♂️ HairScore Challenge
      </h1>

      <p style={{fontSize:"22px", marginTop:"20px"}}>
        Upload your hairline and let the internet judge you.
      </p>
      <UploadPhoto />
      <button style={{
        marginTop:"40px",
        padding:"20px 40px",
        fontSize:"22px",
        borderRadius:"12px",
        border:"none",
        background:"#ff4d6d",
        color:"white",
        cursor:"pointer"
      }}>
        Start the Challenge
      </button>

      <p style={{marginTop:"40px", opacity:0.7}}>
        ⚠️ Warning: brutal honesty ahead.
      </p>

    </main>
  )
}
