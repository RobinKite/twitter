import { Stack, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "@/icons";
import { searchUsers, setSearchResults } from "@/redux/slices/messagingSlice";
import { SelectedUser } from "../../components";

const Wrapper = styled(Stack)({
  marginTop: "0.5rem",
  paddingInline: "0.5rem",
  borderBottom: "1px solid #D1D9DD",
});

const InputWrapper = styled(Stack)({
  flexDirection: "row",
  columnGap: "1.1rem",
  paddingTop: "0.75rem",
  paddingInline: "0.6rem",
  paddingBottom: "0.75rem",
  cursor: "text",
});

const SelectedUsers = styled(Stack)({
  flexDirection: "row",
  paddingBlock: "0.5rem",
  gap: "0.5rem",
  flexWrap: "wrap",
});

const Input = styled("input")({
  fontSize: "0.9125rem",
  marginTop: "0.1rem",
});

export const SearchField = () => {
  const dispach = useDispatch();
  const recommendedUsers = useSelector((state) => state.messaging.recommendedUsers);
  const selectedUsers = useSelector((state) => state.messaging.selectedUsers);
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!searchQuery) {
      dispach(setSearchResults(recommendedUsers));
      return;
    }
    dispach(searchUsers(searchQuery));
  }, [searchQuery, recommendedUsers, dispach]);

  useEffect(() => {
    setSearchQuery("");
  }, [selectedUsers]);

  return (
    <Wrapper>
      <InputWrapper onClick={() => inputRef.current.focus()}>
        <Search fill={isActive ? "#4A99E9" : "#566370"} size={18.75} />
        <Input
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          ref={inputRef}
          value={searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
          placeholder="Search people"
        />
      </InputWrapper>
      {selectedUsers.length > 0 && (
        <SelectedUsers>
          {selectedUsers.map((user) => (
            <SelectedUser key={user.id} {...user} />
          ))}
        </SelectedUsers>
      )}
    </Wrapper>
  );
};
