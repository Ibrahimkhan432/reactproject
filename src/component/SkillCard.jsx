import React from "react";

function SkillCard({data}) {
   const { name, description, icon } = data
    console.log("skills=>",data)
  return (
    <div style={styles.card}>
      <img style={styles.icon} src={icon}/>
      <h3 style={styles.title}>{name}</h3>
      <p style={styles.desc}>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "100px",
    height:"100px",
    padding: "16px",
    borderRadius: "50px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
    transition: "0.3s",
    cursor: "pointer",
  },
  icon: {
    width:"30px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "18px",
    margin: "8px 0",
  },
  desc: {
    fontSize: "14px",
    color: "#555",
  },
};

export default SkillCard;