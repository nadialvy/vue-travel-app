<template>
    <section class="destination">
         <h1> {{ destination.name }} </h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p> {{ destination.description }} </p>
        </div> 

    </section>
</template>

<script>
import sourceData from '@/data.json'
    export default{
        computed: {
            destinationId(){
                return parseInt(this.$route.params.id); 
                //why we must parse it into int, bcs any param coming from
                //url is a string, eventho its a number, but its a string
            },
            destination(){
                //return data when the id is match
                return sourceData.destinations.find(destination => destination.id === this.destinationId)
            },
        
        }
    }
    
    
</script>