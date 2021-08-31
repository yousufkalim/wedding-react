import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export const inputHandler = (e, data, setData,error, setError) => {
    const {name, value} = e.target;
    console.log("changesss")
    setData({...data, [name]: value});

    var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(name === "name"){
        if(value === ""){
            setError({...error, name: "Field must be filled"})
        }
        else{
            setError({...error, name: ""})
        }
    }
    else if(name === "email"){
        if(value === ""){
            setError({...error, email: "Field must be filled"})
        }
        else{
            if(!value.match(mailFormat)){
                setError({...error, email: "Invalid email"})
            }
            else{
                setError({...error, email: ""})
            }
        }
    }
    else if(name === "guests"){
        if(value === ""){
            setError({...error, guests: "Field must be filled"})
        }
        else{
            setError({...error, guests: ""})
        }
    }
    else if(name === "selectDate"){
        if(value === ""){
            setError({...error, selectDate: "Field must be filled"})
        }
        else{
            setError({...error, selectDate: ""})
        }
    }

    else if(name === "selectEvent"){
        if(value === ""){
            setError({...error, selectEvent: "Field must be filled"})
        }
        else{
            setError({...error, selectEvent: ""})
        }
    }
  }

  const clearInputs = (setData) => {
    setData({name: "", email: "", guests: "", selectDate: "", selectEvent:""});
  }

  const clearErrors = (setError) => {
      setError({name: "", email: "", guests: "", selectDate: "", selectEvent:""});
  }


  const sendEmail = (e, setData, setSpinner) => {
    const templateId = "template_0vbqv32";
    emailjs
    .sendForm(
      "service_2lrocj4",
      templateId,
      e.target,
      "user_K2Lqcb3K4istP2Pq0Qcfh"
    )
    .then(
      (result) => {
        Swal.fire({
            icon: 'success',
            title: 'Email sent successfully',
            showConfirmButton: false,
            timer: 2000
          });
          clearInputs(setData);
          setSpinner(false);
        console.log(result.text);
       
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        clearInputs(setData);
        setSpinner(false);
        console.log(error.text);
      }
    );
}

export const submitHandler = (e, data, setData, error, setError, setSpinner) => {
    e.preventDefault();

    var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if(data.name === ""){
            setError({...error, name: "Field must be filled"})
        }
       

        else if(data.email === ""){
            setError({...error, email: "Field must be filled"})
        }
        else if(!data.email.match(mailFormat)){
          setError({...error, email: "Invalid email"})
      }


        if(data.guests === ""){
            setError({...error, guests: "Field must be filled"})
        }


        if(data.selectDate === ""){
            setError({...error, selectDate: "Field must be filled"})
        }

        if(data.selectEvent === ""){
            setError({...error, selectEvent: "Field must be filled"})
        }
        else{
            clearErrors(setError);
            sendEmail(e,setData, setSpinner )

        }
  
  }