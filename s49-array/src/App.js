import "./App.css";

function App() {
  let characterofMB = [
    "Sri Krishna",
    "Karna",
    "Duryodham",
    "Bhishma",
    "Dussasan",
    "Dhrmaraj",
    "Bheema",
    "Arjun",
    "Nakul",
    "Sahadev",
    "Abhimanyu",
    "Draupathi",
    "Kunthi",
    "Dritharashtra",
    "Vyasa",
    "Shalya",
    "Panduraj",
    "Shakuni",
    "Sanutavu",
    "Satyavathi",
    "Ashwa",
    "Kunthi",
    "Vyasa",
    "Parasuram",
    "Adhruka",
    "Vasu",
  ];
  return (
    <div>
      <h1>Learning Array Properties and Methods</h1>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB.length);
          for (let i = 0; i < characterofMB.length; i++)
            //console.log(characterofMB[i]);
            console.log(characterofMB.at(i));
        }}
      >
        Length
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB);
          console.log(characterofMB.toString());
        }}
      >
        toString
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB);
          console.log(characterofMB.join(" | "));
        }}
      >
        Join
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB);
          delete characterofMB[10];
          console.log(characterofMB);
        }}
      >
        Delete
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB);
          characterofMB.pop();
          console.log(characterofMB);
        }}
      >
        pop
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB);
          characterofMB.shift();
          console.log(characterofMB);
        }}
      >
        shift
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB);
          characterofMB.push("parikshith");
          console.log(characterofMB);
        }}
      >
        push
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB);
          characterofMB.unshift("Janamejaya");
          console.log(characterofMB);
        }}
      >
        unShift
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB);
          characterofMB.splice(0, 5, "Amba", "Ambica", "Ambalica");
          console.log(characterofMB);
        }}
      >
        splice
      </button>
      <button
        type="button"
        onClick={() => {
          let vegetables = ["Cucumber", "Potato", "Carrot"];
          let fruits = ["Mango", "Pipeapple", "Banana"];
          let treeProducts = vegetables.concat(fruits);
          let treeProducts2 = [...vegetables, ...fruits];
          console.log(fruits);
          console.log(vegetables);
          console.log(treeProducts);
          console.log(treeProducts2);
        }}
      >
        concat
      </button>
      <button
        type="button"
        onClick={() => {
          let bollywoodActors = ["Ranbhir", "Sharukh", "Hrithik"];
          let tollywoodActors = [
            ["Prabhas", "Ram Charan"],
            ["Mahesh Babu", "Pawan Kalyan"],
            ["jr NTR", "Allu Arjun"],
          ];
          let kollywoodActors = ["Suriya", "Karthik", "Dhanush"];
          let actors = [bollywoodActors, tollywoodActors, kollywoodActors];
          let actors2 = actors.flat(2);
          console.log(actors);
          console.log(actors2);
        }}
      >
        flat
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB);
          let slicedarr = characterofMB.slice(5, 11);
          console.log(slicedarr);
        }}
      >
        slice
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB);
          let newArr = characterofMB.fill("Krish", 5, 11);
          console.log(newArr);
        }}
      >
        fill
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(Array.from("AEIOU"));
        }}
      >
        from
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB.includes("Rama"));
          console.log(characterofMB.includes("Sri Krishna"));
        }}
      >
        includes
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB.indexOf("Rama"));
          console.log(characterofMB.indexOf("Vyasa"));
        }}
      >
        indexOf
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB.lastIndexOf("Vyasa"));
        }}
      >
        lastIndexof
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(characterofMB);
          characterofMB.reverse();
          console.log(characterofMB);
        }}
      >
        reverse
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(Array.isArray("abc"));
          console.log(Array.isArray(true));
          console.log(Array.isArray(123));
          console.log(Array.isArray([1, 2, 3]));
        }}
      >
        isArray
      </button>
      <button
        type="button"
        onClick={() => {
          characterofMB.forEach((ele, i) => {
            console.log(`${i}--->${ele}`);
          });
        }}
      >
        forEach
      </button>
      <button
        type="button"
        onClick={() => {
          let sumanthMarks = [
            77, 66, 55, 44, 88, 99, 55, 44, 88, 99, 77, 66, 44, 88, 19,
          ];
          let passMarks = 35;
          let result = sumanthMarks.every((ele, i) => {
            return ele >= passMarks;
          });
          if (result == true) {
            console.log("Student passed in Tenth");
          } else {
            console.log("Failed ");
          }
        }}
      >
        every
      </button>
      <button
        type="button"
        onClick={() => {
          let sumanthMarks = [77, 66, 55, 44, 88, 99];
          let passMarks = 35;
          let result = sumanthMarks.some((ele, i) => {
            return ele < passMarks;
          });
          if (result == true) {
            console.log("Student Failed in Tenth");
          } else {
            console.log("Student passed in Tenth");
          }
        }}
      >
        some
      </button>
      <button
        type="button"
        onClick={() => {
          let sumanthMarks = [
            77, 66, 55, 44, 88, 99, 76, 87, 98, 85, 56, 64, 44, 88, 99, 77, 66,
            44, 88, 19,
          ];
          let filteredArr = sumanthMarks.filter((ele, i) => {
            return ele % 3 == 0;
          });
          console.log(filteredArr);
        }}
      >
        filter
      </button>
      <button
        type="button"
        onClick={() => {
          let marks = [88, 78, 34, 56, 78, 67, 98, 43, 54, 32, 21, 61, 99];
          let result = marks.find((ele, i) => {
            return ele > 89;
          });
          console.log(result);
        }}
      >
        find
      </button>
      <button
        type="button"
        onClick={() => {
          let marks = [88, 78, 34, 56, 78, 67, 98, 43, 54, 32, 21, 61, 99];
          let result = marks.findIndex((ele, i) => {
            return ele > 89;
          });
          console.log(result);
        }}
      >
        findIndex
      </button>
      <button
        type="button"
        onClick={() => {
          let marks = [88, 78, 34, 56, 78, 67, 98, 43, 54, 32, 21, 61, 99];
          let result = marks.findLast((ele, i) => {
            return ele > 89;
          });
          console.log(result);
        }}
      >
        findLast
      </button>
      <button
        type="button"
        onClick={() => {
          let marks = [88, 78, 34, 56, 78, 67, 98, 43, 54, 32, 21, 61, 99];
          let result = marks.findLastIndex((ele, i) => {
            return ele > 89;
          });
          console.log(result);
        }}
      >
        findLastIndex
      </button>
      <button
        type="button"
        onClick={() => {
          let marks = ["A", "E", "I", "O", "U"];
          let totalMarks = marks.reduceRight((ele, tot) => {
            return (tot += ele);
          });
          console.log(totalMarks);
        }}
      >
        reduce/reduceRight
      </button>
      <button
        type="button"
        onClick={() => {
          let marks = [56, 43, 21, 89, 87, 54, 100, 98, 55, 77, 12, 1001];
          marks.sort((a, b) => {
            return a - b;
          });
          console.log(marks);
          marks.reverse();
          console.log(marks);
        }}
      >
        sort
      </button>
      <button
        type="button"
        onClick={() => {
          let greatPersonalitiesOfIndia = [
            "Shivaji Maharaj",
            "Swami Vivekananda",
            "Sardar Vallabhai Patel",
            "Prithviraj Chouhan",
            "APJ Abdul Kalam",
          ];
          let newArr = greatPersonalitiesOfIndia.map((ele, i) => {
            return `Shri ${ele} Ji`;
          });
          console.log(greatPersonalitiesOfIndia);
          console.log(newArr);
          let marks = [88, 78, 34, 56, 78, 67, 98, 43, 54, 32, 21, 61, 99];
          let newMarks = marks.map((ele, i) => {
            return ele + 5;
          });
          console.log(marks);
          console.log(newMarks);
        }}
      >
        map
      </button>
      {characterofMB.map((ele, i) => {
        return <h1 key={i}>{ele}</h1>;
      })}
      ;
    </div>
  );
}

export default App;
