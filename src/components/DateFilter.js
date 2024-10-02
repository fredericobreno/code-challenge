export const DateFilter = ({ setDateFilter }) => {
  const handleChangeFrom = (value) => {
    setDateFilter((prev) => ({
      ...prev,
      from: new Date(`${value}T00:00:00`).getTime()
    }))
  }

  const handleChangeTo = (value) => {
    setDateFilter((prev) => ({
      ...prev,
      to: new Date(`${value}T00:00:00`).getTime()
    }))
  }

  return (
    <div>
      <div>
        <label>From:</label>
        <input type="date" onChange={(e) => handleChangeFrom(e.target.value)} />
      </div>
      <div>
        <label>To:</label>
        <input type="date" onChange={(e) => handleChangeTo(e.target.value)} />
      </div>
    </div>
  );
}

