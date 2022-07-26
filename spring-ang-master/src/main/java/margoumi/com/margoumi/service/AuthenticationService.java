package margoumi.com.margoumi.service;

import margoumi.com.margoumi.models.User;
import margoumi.com.margoumi.security.UserPrincipal;
import margoumi.com.margoumi.security.jwt.IJwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private IJwtProvider jwtProvider;

    public User SignInAndReturnJWT(User signInRequest){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInRequest.getEmail(), signInRequest.getPassword()));

        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
    String jwt = jwtProvider.generateToken(userPrincipal);
    User signInUser = userPrincipal.getUser();
    signInUser.setToken(jwt);

    return signInUser;
    }
}
