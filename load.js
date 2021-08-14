if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").then(
        reg => console.log("Se registro")
    ).catch(
        err => console.log(err)
    )
}