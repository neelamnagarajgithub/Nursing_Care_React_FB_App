import { useContext } from "react";
import { NurseContext } from "../../Context/NurseContext";
import { useNavigate } from "react-router";

function NurseList() {
  const navigate = useNavigate();
  const { nurses } = useContext(NurseContext);

  function handleViewProfile(nurseid) {
    navigate(`/nurse/${nurseid}`);
  }
  return (
    <div>
      <div className="nurselistcontainer">
        <div className="nurselist">
          {nurses.map((nurse) => (
            <div className="nursecard" key={nurse._id}>
              <h1>{nurse.name}</h1>
              <p>{nurse.age}</p>
              <p>{nurse.sex}</p>
              <p>{nurse.email}</p>
              <p>{nurse.previousWorkExperience}</p>
              <span>
                <button
                  className="booknowbtnonhover"
                  onClick={(e) => {
                    e.preventDefault();
                    // console.log(nurse);
                    handleViewProfile(nurse._id);
                  }}
                >
                  View Profile
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default NurseList;
