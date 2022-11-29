import React, { useEffect } from "react"

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"

import { FlashList } from "@shopify/flash-list"
import type { inferProcedureOutput } from "@trpc/server"
import type { AppRouter } from "@acme/api"

import { trpc } from "../utils/trpc"


const CreatePost: React.FC = () => {

  const utils = trpc.useContext()



  const [email, onChangeEmail] = React.useState("")
  const [password, onChangePassword] = React.useState("")
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [error, setError] = React.useState(false)


  const validate = async () => {
    const data = await utils.authEmail.auth.fetch({
      email,
      password
    })
    if (data) {
      setLoggedIn(true)
      setError(false)
    } else {
      setLoggedIn(false)
      setError(true)
    }
  }




  return (
    <>
      {!loggedIn ? <View className="flex flex-col border-t-2 border-gray-500 p-4">
        <TextInput
          className="mb-2 rounded border-2 border-gray-500 p-2 text-white"
          onChangeText={onChangeEmail}
          placeholder="Title"
        />
        <TextInput
          className="mb-2 rounded border-2 border-gray-500 p-2 text-white"
          onChangeText={onChangePassword}
          placeholder="Content"
        />
        <TouchableOpacity
          className="rounded bg-[#cc66ff] p-2"
          onPress={validate}
        >
          <Text className="font-semibold text-white">login</Text>

        </TouchableOpacity>
        {error && <Text className="font-semibold text-white">invalid credentials </Text>}
      </View> : <Text className="font-semibold text-white">you are logged in </Text>}
    </>
  )
}

export const HomeScreen = () => {

  return (
    <SafeAreaView className="bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          Create <Text className="text-[#cc66ff]">T3</Text> Turbo
        </Text>
        <CreatePost />
      </View>
    </SafeAreaView>
  )
}
