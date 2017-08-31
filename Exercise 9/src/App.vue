<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label for="fullname">FullName</label>
                        <input
                                type="text"
                                id="fulllname"
                                class="form-control"
                                v-model="userData.fullname">
                    </div>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="mail"
                                class="form-control"
                                v-model="userData.email">
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                              type="password"
                              id="password"
                              class="form-control"
                              v-model="userData.password">
                    </div>
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                        <label for="male">
                            <input
                                    type="radio"
                                    value="Yes"
                                    v-model="userData.storeData"> Yes
                        </label>
                        <label for="female">
                            <input
                                    type="radio"
                                    value="No"
                                    vmodel="userData.storeData"> No
                        </label>
                    </div>
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                      <button
                             class="btn btn-primary"
                             @click.prevent="submitted = true"> Submit!
                      </button>
                    </div>


                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullname }} </p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password:{{ userData.password }} </p>
                        <p>Store in Database?: {{ userData.storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          userData : {
            fullname: '',
            email: '',
            password: '',
            storeData: 'Yes'
          },
          submitted: false
        }
      }
    }
</script>

<style>
</style>
