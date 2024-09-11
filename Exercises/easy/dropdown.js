const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState([]);

  const handleCountry = (country) => {
    setSelectedCountry([]);
    const selectingCountry = countries.find((element) => element.name === country);
    setSelectedCountry(selectingCountry.cities);
    console.log(selectingCountry);
  };

  return (
    <div className="App">
      <select onChange={(e) => handleCountry(e.target.value)}>
        {countries.map((country) => (
          <option>{country.name}</option>
        ))}
      </select>

      {selectedCountry.length > 0 && (
        <select>
          {selectedCountry.map((city) => (
            <option>{city}</option>
          ))}
        </select>
      )}
    </div>
  );
}
