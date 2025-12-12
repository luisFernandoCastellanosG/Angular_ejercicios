(()=>
{
    const apto1 = {
        ubicacion       : "Bogota - Calle 123 #45-67",
        avaluocomercial : 250000000,
        avaluopredial   : 150000000,
        embargado       : true
    }
    const apto2 = {
        ubicacion       : "Calí - Carrera 23 #51-78",
        avaluocomercial : 180000000,
        avaluopredial   : 120000000,
        embargado       : false
    }
    const aptoestado=
    (apto:any)=> console.log("El apartamento ubicado en "+apto.ubicacion);
    
    aptoestado(apto1);

    interface apartamento{
        ubicacion       : string,
        avaluocomercial : number,
        avaluopredial   : number,
        embargado       : boolean
    }
    const aptobogota:apartamento={
        ubicacion       : "Bogota - Transversal 45 #23-56",
        avaluocomercial : 300000000,
        avaluopredial   : 200000000,
        embargado       : false
    }
    //aptoestado(aptobogota);
    const aptointerface=
    (depto:apartamento)=> console.log(`El apartamento ubicado en ${depto.ubicacion}`);
    aptointerface(aptobogota);

}

)();